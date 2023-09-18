package com.pokemon.api;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PokemonRepository extends CrudRepository<Pokemon, Long> {
  
  List<Pokemon> findAllByOrderByIdAsc();

}
