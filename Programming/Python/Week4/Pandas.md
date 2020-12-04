# Pandas

Go to the [[Python Week 4 Main Page]] or the [[Python - Main Page]]
Also see the [[Programming Main Page]] or the [[Main AI Page]]

Also see [[Econometrics Main Page]]

A popular library for data analysis

Pandas comes with Conda, otherwise install wil Pip.

`import pandas as pd` <-- means you can use `pd` instead of `pandas` whenever you have to type it out. For example:

```python
import pandas as pd
csv_path = 'file1.csv'
df1 = pd.read_csv(csv_path) # this is easier than always writing pandas.read_csv
xlxs_path = 'file1.xlxs'
df2 = pd.read_excel(file1.xlxs) # you can also read excel files
df2.head() # returns the first 5 rows of the dataframe
```

## Dataframes

A pandas construct with colums and rows used for working with data. 

You can cast a dictionary as a dataframe with the keys corresponding to the column labels and the values are lists corresponding to the rows. 

![A graphic representing a dictionary being cast as a dataframe](https://i.imgur.com/YFy007k.png)

E.g.

songs = { "Album" : [ "Thriller", "Back in Black", "The Dark Side of the Moon", "The Bodyguard", "Bat Out of Hell"], "Released" : [1982, 1980, 1973, 1992, 1977], "Length" : ["00:42:19", "00:42:11", "00:42:49", "00:57:44", "00:46:33"]}

songs_frame = pd.DataFrame(songs)

|Index|Artist         |Album                          |Released|Length |Genres                     |Millions sold|Claimed Sales (millions)|Released |Soundtrack|Rating|
|-----|---------------|-------------------------------|--------|-------|---------------------------|-------------|------------------------|---------|----------|------|
|0    |Michael Jackson|Thriller                       |1982    |0:42:19|pop, rock, R&B             |46           |65                      |30-Nov-82|NaN       |10    |
|1    |AC/DC          |Back in Black                  |1980    |0:42:11|hard rock                  |26.1         |50                      |25-Jul-80|NaN       |9.5   |
|2    |Pink Floyd     |The Dark Side of the Moon      |1973    |0:42:49|progressive rock           |24.2         |45                      |01-Mar-73|NaN       |9     |
|3    |Whitney Houston|The Bodyguard                  |1992    |0:57:44|R&B, soul, pop             |27.4         |44                      |17-Nov-92|Y         |8.5   |
|4    |Meat Loaf      |Bat Out of Hell                |1977    |0:46:33|hard rock, progressive rock|20.6         |43                      |21-Oct-77|NaN       |8     |
|5    |Eagles         |Their Greatest Hits (1971-1975)|1976    |0:43:08|rock, soft rock, folk rock |32.2         |42                      |17-Feb-76|NaN       |7.5   |
|6    |Bee Gees       |Saturday Night Fever           |1977    |1:15:54|disco                      |20.6         |40                      |15-Nov-77|Y         |7     |
|7    |Fleetwood Mac  |Rumours                        |1977    |0:40:01|soft rock                  |27.9         |40                      |04-Feb-77|NaN       |6.5   |

### Making new dataframes from existing frames

A new frame can be made from an existing one. Say you wanted a new frame with only the album and release date from the previous datafame, you could say:

df_release = songs_frame[['Album', 'Released']]

And you'd get a new dataframe with only those two columns returned.

|Album|Released       |
|-----|---------------|
|Thriller|1982           |
|Back in Black|1980           |
|The Dark Side of the Moon|1973           |
|The Bodyguard|1992           |
|Bat Out of Hell|1977           |
|Their Greatest Hits (1971-1975)|1976           |
|Saturday Night Fever|1977           |
|Rumours|1977           |

## Accessing values in a dataframe

There are two main ways to access data from a dataframe, `loc`, and `iloc`.

### loc

`loc` relies on column labels and and row position to find the values you wish to extract. For example, if I wanted to know the release date of Bat Out of Hell, I could use `df.loc[1, 'Released']` --> 21-Oct-77

You can use the normal slicing syntax to return multiple rows. If I wanted to know all 8 artists recorded on the table:

`df.loc[0:7, 'Artist']` --> ['Michael Jackson', 'AC/DC', 'Pink Floyd', 'Whitney Houston', 'Meat Loaf', 'Eagles', 'Bee Gees', 'Fleetwood Mac'']

### iloc

`iloc` is integer based and simply treats the dataframe as an x,y coordinate system starting at 0,0 with data retrieved by entering the coordinates of the cell or cells you wish to extract.

`df.iloc[3,6]` -->  27.4 (found in the Millions sold column)
`df.iloc[0.0]` --> "Michael Jackson"

Note: Headings are not included in the coordinate indexes.

Again, you can use slicing notation to retrieve multiple values.

## Creating a new dataframe with 'loc' slicing

You can slice a dataframe and assign the values to a new dataframe using `loc` as well.

E.g.

`three_artists = df.loc[0:3, ['Artist', 'Album', 'Released']`

This would create `three_artists`, a dataframe looking like this:

|Artist|Album          |Released|
|------|---------------|--------|
|Michael Jackson|Thriller       |1982    |
|AC/DC |Back in Black  |1980    |
|Pink Floyd|The Dark Side of the Moon|1973    |

But what if I wanted all the data in those three columns? Simply leave the integers out of the position argument and leave the colon bare.

`three_artists = df.loc[ : , ['Artist', 'Album', 'Released']]`

Giving us:

|Artist|Album          |Released|
|------|---------------|--------|
|Michael Jackson|Thriller       |1982    |
|AC/DC |Back in Black  |1980    |
|Pink Floyd|The Dark Side of the Moon|1973    |
|Whitney Houston|The Bodyguard  |1992    |
|Meat Loaf|Bat Out of Hell|1977    |
|Eagles|Their Greatest Hits (1971-1975)|1976    |
|Bee Gees|Saturday Night Fever|1977    |
|Fleetwood Mac|Rumours        |1977    |

You can also slice multiple columns.

`df1 = df.loc[0:7, 'Artist':'Length']`

|Artist|Album|Released     |Length|
|------|-----|-------------|------|
|Michael Jackson|Thriller|1982         |0:42:19|
|AC/DC |Back in Black|1980         |0:42:11|
|Pink Floyd|The Dark Side of the Moon|1973         |0:42:49|
|Whitney Houston|The Bodyguard|1992         |0:57:44|
|Meat Loaf|Bat Out of Hell|1977         |0:46:33|
|Eagles|Their Greatest Hits (1971-1975)|1976         |0:43:08|
|Bee Gees|Saturday Night Fever|1977         |1:15:54|
|Fleetwood Mac|Rumours|1977         |0:40:01|

Keep in mind you can simply create a new dataframe by ommitting the first argument entirely, using:

`df2 = df1[['a', 'b', 'c']]`

### Creating a new dataframe with iloc slicing

We can do the same as the above by using the coordinate-only system of the `iloc` method.

`two_artists = df.iloc[0:2, 0:3]`

This new dataframe now looks like this:

|Artist|Album          |Released|
|------|---------------|--------|
|Michael Jackson|Thriller       |1982    |
|AC/DC |Back in Black  |1980    |


## There is so much more to Pandas

Pandas is an overwhelmingly powerful tool that forms the basis of most data science done in Python - and this page has barely begun to cover it. 

#ToDo Go through the Pandas User Guide and study each page as if it were a part of this course. It will become hugely useful when dealing with the bonkers amounts of data and metadata coming through M.E.T.A, and E.M.I.L.Y.

[Here's the User Guide](https://pandas.pydata.org/pandas-docs/stable/user_guide/index.html)