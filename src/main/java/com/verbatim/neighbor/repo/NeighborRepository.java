package com.verbatim.neighbor.repo;

import com.verbatim.neighbor.model.Neighbor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


    public interface NeighborRepository extends CrudRepository<Neighbor, Long>{
        List<Neighbor> findByAge(int age);
    }

