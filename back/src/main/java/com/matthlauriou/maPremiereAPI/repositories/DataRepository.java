package com.matthlauriou.maPremiereAPI.repositories;

import com.fasterxml.jackson.core.util.DefaultPrettyPrinter;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.matthlauriou.maPremiereAPI.models.dao.DataDAO;
import com.matthlauriou.maPremiereAPI.models.dao.CarDao;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Component
public class DataRepository {

    @Value("${cheminAccesFichier}")
    private String cheminFichier;

    private DataDAO getData() throws IOException {
        File fichierData = ResourceUtils.getFile("classpath:".concat(cheminFichier));
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(fichierData, DataDAO.class);
    }

    private void writeData(DataDAO dataDAO) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        ObjectWriter writer = mapper.writer(new DefaultPrettyPrinter());
        writer.writeValue(ResourceUtils.getFile("classpath:".concat(cheminFichier)), dataDAO);
    }

    public List<CarDao> getVoitures() throws IOException {
        return this.getData().getCars();
    }

    public Optional<CarDao> getVoiture(Integer id) throws IOException {
        return this.getData().getCars().stream().filter(carDao -> carDao.getId() == id).findFirst();
    }

    public CarDao addVoiture(CarDao carDaoACreer) throws IOException {
        DataDAO dataDAO = this.getData();

        boolean carExist = false;
        for(CarDao carDao : dataDAO.getCars()) {
            if(carDao.getId() == carDaoACreer.getId()) {
                carExist = true;
                break;
            }
        }

        if(!carExist) {
            dataDAO.getCars().add(carDaoACreer);
            this.writeData(dataDAO);
        } else {
            new RuntimeException("CAR EXISTS");
        }

        return carDaoACreer;
    }

    public CarDao updateVoiture(CarDao carDaoUpdated) throws IOException {
        DataDAO dataDAO = this.getData();

        boolean carFound = false;
        for(CarDao carDao : dataDAO.getCars()) {
            if(carDao.getId() == carDaoUpdated.getId()) {
                carDao.update(carDaoUpdated);
                carFound = true;
                break;
            }
        }

        if(carFound) {
            this.writeData(dataDAO);
        } else {
            new RuntimeException("CAR DOESN'T EXIST");
        }

        return carDaoUpdated;
    }

    public boolean deleteVoiture(CarDao carDao) throws IOException {
        DataDAO dataDAO = this.getData();

        CarDao carDaoASupprimer = null;
        for(int i = 0; i < dataDAO.getCars().size(); ++i) {
            if(dataDAO.getCars().get(i).getId() == carDao.getId()) {
                carDaoASupprimer = dataDAO.getCars().get(i);
                break;
            }
        }

        if(carDaoASupprimer != null) {
            dataDAO.getCars().remove(carDaoASupprimer);
            this.writeData(dataDAO);
        } else {
            new RuntimeException("CAR DOESN'T EXIST");
        }

        return true;
    }

}
