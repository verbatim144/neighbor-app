package com.verbatim.neighbor.controller;

import com.verbatim.neighbor.model.Neighbor;
import com.verbatim.neighbor.repo.NeighborRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200") //enables cross-origin requests only for this specific method
@RestController
@RequestMapping("/api") // /api is the URI for which this controller will be used.
public class NeighborController {

    @Autowired
    NeighborRepository repository;

    @GetMapping("/neighbors")
    public List<Neighbor> getAllNeighbors(){
        System.out.println("Get all Neighbors...");

        List<Neighbor> neighbors = new ArrayList<>();
        repository.findAll().forEach(neighbors::add);

        return neighbors;
    }

    @PostMapping(value = "/neighbors/create")
    public Neighbor postNeighbor(@RequestBody Neighbor neighbor) {

        Neighbor _neighbor = repository.save(new Neighbor(neighbor.getName(), neighbor.getSurname(), neighbor.getAge(), neighbor.getCountry(), neighbor.getCity()));
        return  _neighbor;
    }

    @DeleteMapping("/neighbors/{id}")
    public ResponseEntity<String> deleteNeighbor(@PathVariable("id") long id) {
        System.out.println("Delete Neighbor with id = " + id + "...");

        repository.deleteById(id);

        return new ResponseEntity<>("Neighbor has been deleted!", HttpStatus.OK);
    }

    @DeleteMapping("/neighbors/delete")
    public ResponseEntity<String> deleteAllNeighbors(){
        System.out.println("Delete all neighbors");

        repository.deleteAll();

        return new ResponseEntity<>("All neighbors have been deleted!",HttpStatus.OK);
    }

    @GetMapping(value = "neighbor/age/{age}")
    public List<Neighbor> findByAge(@PathVariable int age) {
        List<Neighbor> neighbors = repository.findByAge(age);
        return neighbors;
    }

    @PutMapping("neighbor/{id}")
    public ResponseEntity<Neighbor> updateNeighbor(@PathVariable("id") long id, @RequestBody Neighbor neighbor){
        System.out.println("Update neighbor with ID = " + id + "...");

        Optional<Neighbor> neighborData = repository.findById(id);

        if(neighborData.isPresent()) {
            Neighbor _neighbor = neighborData.get();
            _neighbor.setName(neighbor.getName());
            _neighbor.setSurname(neighbor.getSurname());
            _neighbor.setAge(neighbor.getAge());
            _neighbor.setCity(neighbor.getCity());
            _neighbor.setCountry(neighbor.getCountry());
            return new ResponseEntity<>(repository.save(_neighbor), HttpStatus.OK);
        }else{
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



}
