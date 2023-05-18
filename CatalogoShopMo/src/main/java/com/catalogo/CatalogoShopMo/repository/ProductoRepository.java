package com.catalogo.CatalogoShopMo.repository;

import com.catalogo.CatalogoShopMo.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    // Otros métodos del repositorio
    
    void deleteById(Long id);
}
