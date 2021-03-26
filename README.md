# Skrypter
Skrypter is software that is used to execute SQL queries on MSSQL databases. The software allows you to add multiple servers, on which many databases can be located, and execute scripts on them. The query can be written from within the application or imported from a file. The application informs about the correct or incorrect execution of the query by means of color markings as well as saving in "* .log" files.

The application opens in the 800x600 format. Its size cannot be changed. The default application location is in the center of the screen. The location can be changed by grabbing the application title (SKRYPTER) with the cursor and moving it to any place.

Principle of operation:

The Skrypter sends a query to previously configured servers returning the names of databases located on the given server

The default query text on first run is:
`"SELECT * FROM master.sys.databases where state_desc = 'ONLINE' order by name"`
###### Important: You should pay attention to what query will be written, as incorrect query may cause an application error.

On the CONFIGURATION tab, you need to add servers and authentication method. You can also add database names to quickly select these databases

You can add multiple script files to the tab SCRIPT FROM FILE and they will be executed on all selected databases. You can also write your own script on the SCRIPT tab.

Before executing scripts, you need to refresh the list of databases on previously configured servers. Then you need to select which databases the scripts should execute on.

If you want to ignore a particular server, you can check the circle next to its name on the list. When it turns red, the selected server will be ignored.
![Ignore server](https://i.imgur.com/MH0UxIB.png)

The application does not return a result (only a log entry in case of an error). So queries like "select" don't make much sense.

The application checks for updates at startup. If there is a newer version, the user will be notified. Checking for updates is done once at the start of the application. The ability to check for updates at startup can be disabled by unchecking the box: Check for updates at application startup. An internet connection is required for this.

The application has different language versions. The language can be changed by selecting it from the list. Changing the language does not require restarting the application. Currently, you can choose Polish or English language.

# Buy Me A beer! 🍺

Buymeacoffee is a website that contacts developers, designers, artists, etc. with their communities so that people can contribute and help them out so that the content they offer is better since the rewarding system encourages creators to continue doing what they like and helping others.

If you can contribute or you want to, feel free to do it at [__Buy me a beer! :beer:__](https://www.buymeacoffee.com/pawelm), I will be really thankfull for anything, because that helps me a lot.
### Be careful, there is no refund system. Remember that you don't need to donate, it is just a free choice for you. Thank you!
