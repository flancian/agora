# Entities 
Go to [[How to build a Chatbot with Watson Assistant]] or [[Building AI-powered Chatbots with Watson]]

Chatbot series:
- [[Intents]]
- Entities
- [[Dialogues]]

**Entities** capture specific values in the user inputs.

- [[Intents]] use an **#** symbol
- Entities use an **@** symbol

You can define synonyms for entities.

### Entities working with intents

**User** --> When is your Toronto store open?
**Bot** -->  Detects: \#hours_info intent and @location:Toronto entity

Synonym: Toronto == Warden St

**User** --> When is your Warden St store open?
**Bot** -->  Detects: \#hours_info intent and @location:Toronto entit

**Note** If an entity has multiple words, (wrap them in parenthesis). Don't do this for synonyms though, I've found that this blocks Watson from using its fuzzy matching on the synonym.

Create entities in the skill section of the Watson assistant section.

![[Create_Entities.pdf]]

There are a number of pre-existing system entities available as synonyms for common uses.

![A map of where entities exist in the dialog flow](https://i.imgur.com/7Dky1DE.png)

### Structure of import/export CSV

The structure is different to the Intents file in that it has the entity, then the value of the entity, then a comma-delimited list of synonyms for the entity value.

	occasion,Christmas,Yule,December 25th,Dec 25,December 25
	occasion,Graduation,commencement,graduate,grad,graduating
	occasion,Wedding,bridesmaid,groom,bride,best man
	occasion,Congratulations,success,award
	occasion,Mother's Day,Mom's Day,Mum's Day,Mothering Sunday
	occasion,Birthday,birth day,bday,b-day
	occasion,Funeral,celebration of life,Shiva,wake,sympathy,grief,sorrow,condolences
	
![[Import_and_Export_Entities.pdf]]
