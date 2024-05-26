Feature: Posters Galore orders feature

Scenario: Posters Galore orders scenario
Given user opens Posters Galore application by sending 'https://marmelab.com/react-admin-demo/'
When user enters 'test' and 'test' as user credentials and click Sign In button
And user clicks on Orders on left pane
And opens any order randomly from the list of orders on Orders dashboard page
Then user should land on to order details page