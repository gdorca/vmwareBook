//Class to retrieve data from the database. It gets a string with the related publishing house ID as an argument and returns the query result 
//as an agregate result list. Query gets count of books  and author grouped by author
public with sharing class PublishedBooksByAuthorClass {

        @AuraEnabled(cacheable=true)
        public static List<AggregateResult> getBooksByAuthor(string publishingHouseID) {

            return [
                SELECT COUNT(book__c) c, author__r.Name FROM AuthorBookJoined__c WHERE book__r.Publishing_House__c=:publishingHouseID GROUP BY author__r.Name
                ];
        }
    
}

