# Important Notes

## Reconciliation

React creates the virtual representation of your UI in the memory, 
and then ReactDOM receives that and syncs your UI (and the changes to it) to the DOM. 
This process is called reconciliation

> ReactDOM completely manages the root element

## JSX

JSX is a special syntax for React that makes it easier to represent UI
JSX looks similar to HTML but it is not HTML
JSX code writing gets transformed into React.createElement
JSX is not part of the browser needs a tool to transform it into valid JavaScript

> An expression is any valid JavaScript code that resolves to a value

## The rule of thumb is:

If the value is a string, then wrap it with quotes.
If the value is dynamic (the result of an expression), 
then wrap it with curly braces {}.
