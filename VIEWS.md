# Dashboard

`/`
  -statystyki dzisiejszych zamówień (zdalne i lokalne)
  -listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

`/login`
  -pola na login i hasło
  -guzik do logowania (link do dashboardu)

# Widok dostępności stolików

`/tables`
  -wybór daty i godziny
  -tabela z listą rezerwacji oraz wydarzeń
    -każda kolumna będzie jednym stolikiem
    -każdy wiersz = 30min
    -ma przypominać widok tygodna w kalendarzu Goole, gdzie w kolumnach zamiast dni są różne stoliki
    -po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
`/tables/booking/:id`
  -zawiera wszystkie informacje dot. rezerwacji
  -umożliwiaedycję i zapisanie zian
`/tables/booking/new`
  -jw, bez początkowych informacji
`/tables/events/:id`
  -jw, dla eventu
`/tables/events/new`
  -jw dla eventu, bez początkowych informacji


# Widok kelnera

`/waiter`
  -tabela
    -w wierszach wyświetla stoliki
    -w kolumnach różne rodzaje informacji (status, czas do ostatniej aktywności)
    -w ostatniej kolumnie dostępne akcje do daanego stolika
`/waiter/order/new`
  -numer stolika (edytowalny)
  -menu poduktów
  -opcje wybranego produktu
  -zamówione produkty z opcjami i ceną
  kwotę zamówienia
`/waiter/order/:id`
  -jw

# Widok kuchni

`/kitchen`
  -wyświetla listę zamówień w kolejności zamówienia

  -lista musi zawierać:
    -numer stolika (lub zamówienie zdalne)
    -pełne informacje dot. zamówionych dań
  -na liście musi być możliwość oznaczenia zamówienia jako zrealizowane

#
