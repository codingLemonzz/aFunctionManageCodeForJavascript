# aFunctionManageCodeForJavascript
## Introduction
  This is a easy-to-use javascript code for manage your function in your javascript code.Especial when you have a large amount of function in your code,it can be helpful.
## How to use
  there are some function to help you.
  
1. bind
  when you have finished your code,you can bind your function directly.It can be like this:
  funcContainer.bind('function name', function(args1,args2....){....});

2. trigger
  you can trigger your function when you have bound your function:
    funcContainer.trigger('function name', args....);

3. remove
  if you don't need the function,you can also remove it:
  funcContainer.remove('function name');
  
4. removeAll
  if you want to delete all the function in the funcContainer:
  funcContainer.removeAll();
  
there will be more function updated in the future......
