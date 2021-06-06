# Dashboard

- `/`
  - statystyki dzisiejszych zamówień ( zdalne i lokalne )
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - kazda kolumna będzie jednym stolikiem
    - kazdy wiersz = 30 minut
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są rózne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umozliwia edycję i zapisanie zmian
- `/tables/booking/new`
  - analogicznie do powyzszej, bez początkowych informacji
- `/tables/events/:id`
  - analogicznie do powyzszej, dla eventów
- `/tables/events/new`
  - analogicznie do powyzszej, dla eventów, bez początkowych informacji

# Widok kelnera

- `/waiter`
  - tabela
  - w wierszach stoliki
  - w kolumnach rózne rodzaje informacji (status, czas od ostatniej aktywnosci)
  - w ostatniej kolumnie dostepne akcje dla danego stolika
- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia
- `/waiter/order/:id`
  - jak powyzsza

# Widok kuchni

- `/kitchen`
  - wyświetla listę zamówienie w kolejności ich zlozenia
  - lista musi zawierać:
    - numer stolika (lub zamowienia zdalnego)
    - pełne informacje dotyczące zamówionych dań
  - na liscie musi być mozliwość oznaczenia zamowienia jako zrealizowane
