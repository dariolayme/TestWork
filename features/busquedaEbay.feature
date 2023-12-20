Feature: busquedaEbay
  @ebaySearch
  Scenario Outline: El usuario busca algun elemento en el buscador de eBay
  
    Given El usuario esta en la homepage de eBay
    When El usuario busca <producto>
    Then Deberiamos ver resultados en la página de búsqueda

    Examples:
      | producto |
      | Pilas |