In this lab, you will be building an increment counter using Redux.

Prerequisites
Familiarity with linux commands.
You must have completed the labs in the previous sections.
All the commands and the shortcut buttons in this lab, in the linux based lab environment that is provided. You may need to do it with appropriate variation if you are not using the lab environment and are doing it on Windows.

Objective:
After completing this lab, you will be able to use state management to increment the counter using Redux. Redux library has all that it requires for store management while react-redux binds react and redux libraries together. It centralizing an application’s state and logic, thereby making the state accessible outside of the component.

The store management with redux has 3 main components:

Actions - are blocks of information that send data from your application to your store. Actions must have a type property that indicates the type of action being performed.

Reducers -Reducers specify how the application’s state changes in response to actions sent to the store.

Store -The Store is the object that brings the action and reducer together. The store has the following responsibilities: Holds application state; Allows access to state; Allows state to be updated via dispatch(action);


