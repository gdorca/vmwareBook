//Class to retrieve data from the database. It gets a string with the related publishing house ID as an argument and returns the query result 
//as an agregate result list. Query gets count of books and author grouped by author
public with sharing class PublishedBooksByGenreClass {

            @AuraEnabled(cacheable=true)
            public static List<AggregateResult> getBooksByGenre(string publishingHouseID) {
    
                return [
                    SELECT count(id) c, Genre__c FROM Book__c  WHERE Publishing_House__c=:publishingHouseID GROUP BY Genre__c
                    ];
            }
    
}
