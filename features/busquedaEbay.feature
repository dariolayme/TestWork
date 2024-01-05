Feature: busquedaEbay
  @ebaySearch
  Scenario Outline: El usuario busca algun elemento en el buscador de eBay
  
    Given Estoy en la homepage de eBay
    When Quiero buscar <producto>
    Then Obtenemos la cantidad de resultados

    Examples:
      | producto |
      | Pilas |
      | Cartas|