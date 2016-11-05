Viewtime
A simple script that counts the viewport time of sections of your page.

What (yet) - 
Checks for all elements that have an id tag associated with them
Counts number of seconds the element was in the viewport (while the tab was active)
Updates count continuously each second
Takes into account viewport change events such as zooming

Oh and no dependencies :)



Why - 
Online content such as news, medium articles, shocking top 10 clickbait buzzfeed articles, all seek to attract large shares of online attention by keeping their users engaged. A common challenge
is to identify which parts / which type of content was preferred by users.
Apart from analytics, this can also be used in fields like information retrieval. Eg. When using the tf-idf model, giving higher weight to words belonging to hotter sections of the article. Where hotter means having a higher degree of viewport time :P

To-do -
Add option to insert random divs with random ids, thus dividing whole page into some parts.
Specify output location for the data and store it
Add option to remove insights from 'Bouncers' (as they affect the time count of the top part of page only)
A generateReport option which takes a snapshot of the whole page and perhaps outputs a viewport time graph after normalizing the raw data
Include some kind of support for dynamically generated elements