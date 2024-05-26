Feature: Login
    *To fully utilize the system,
    *As an administrator,
    *I must be able to log in.

    Scenario: User login into the system
        Given Login page is open
        When I fill login credentials
        Then Dashboard should be displayed
