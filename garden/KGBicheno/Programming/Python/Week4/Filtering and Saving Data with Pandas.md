# Saving Data with Pandas

You can save a dataframe into different formats.

## Dataframe Methods

### The 'unique()' method

Given the column 'Released' from the following dataframe:

|Index|Artist         |Album|Released|Length |Genres                     |Millions sold|
|-----|---------------|-----|--------|-------|---------------------------|-------------|
|0    |Michael Jackson|Thriller|1982    |0:42:19|pop, rock, R&B             |46           |
|1    |AC/DC          |Back in Black|1980    |0:42:11|hard rock                  |26.1         |
|2    |Pink Floyd     |The Dark Side of the Moon|1973    |0:42:49|progressive rock           |24.2         |
|3    |Whitney Houston|The Bodyguard|1992    |0:57:44|R&B, soul, pop             |27.4         |
|4    |Meat Loaf      |Bat Out of Hell|1977    |0:46:33|hard rock, progressive rock|20.6         |
|5    |Eagles         |Their Greatest Hits (1971-1975)|1976    |0:43:08|rock, soft rock, folk rock |32.2         |
|6    |Bee Gees       |Saturday Night Fever|1977    |1:15:54|disco                      |20.6         |
|7    |Fleetwood Mac  |Rumours|1977    |0:40:01|soft rock                  |27.9         |

Say we wanted to know the unique years in the column 'Released', we would use the following syntax:

`year_list = df['Released'].unique`

`print(year_list)` --> [1982,1980,1973,1992,1977,1976]

### Inequalities on entire columns (Filtering part 1)

Say we want to only return rows for albums created in the eighties and after. This can be done in one line of code, but in two steps.

First --> `df['Released']>=1980` returns a new column of booleans depending on the result of the inequality.

|Index|Released|
|-----|--------|
|0    |True    |
|1    |True    |
|2    |False   |
|3    |True    |
|4    |False   |
|5    |False   |
|6    |False   |
|7    |False   |

### Create a new dataframe on inequalities (Filtering part 2)

If we then want to create a new dataframe that only has the rows for which the inequality is ==True==, we use the following syntax:

`df1 = df[df['Released']>=1980]`

Now df1 is a dataframe that looks like this:

|Index|Artist|Album        |Released|Length |Genres        |Millions sold|
|-----|------|-------------|--------|-------|--------------|-------------|
|0    |Michael Jackson|Thriller     |1982    |0:42:19|pop, rock, R&B|46           |
|1    |AC/DC |Back in Black|1980    |0:42:11|hard rock     |26.1         |
|2    |Whitney Houston|The Bodyguard|1992    |0:57:44|R&B, soul, pop|27.4         |

## Saving dataframes to CSV files

To save the new df1 dataframe to a csv file, we use the `to_csv()` method.

`df1.to_csv('new_songs.csv')`

This will create a new csv file in the working directory with our data stored in it. 

There are many other file formats into which you can save your data using Pandas. 