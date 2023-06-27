#!/bin/bash
if [ -d "/home/coder/project/workspace/springapp/" ]
then
    echo "project folder present"
    # checking for src folder
    if [ -d "/home/coder/project/workspace/springapp/src/" ]
    then
        cp -r /home/coder/project/workspace/junit/test /home/coder/project/workspace/springapp/src/;
    cd /home/coder/project/workspace/springapp/ || exit;
    mvn clean test;
    else
        echo "testCreateRestaurant FAILED";
        echo "testUpdateRestaurant FAILED";
        echo "testGetRestaurantAll FAILED";
        echo "testGetRestaurantById FAILED";
        echo "testGetRestaurantByName FAILED";
        echo "testGetOrderAll FAILED";
        echo "testGetOrderById FAILED";
        echo "testCreateMenuItem FAILED";
        echo "testGetMenuItemAll FAILED";
        echo "testGetMenuById FAILED";
    fi
else   
        echo "testCreateRestaurant FAILED";
        echo "testUpdateRestaurant FAILED";
        echo "testGetRestaurantAll FAILED";
        echo "testGetRestaurantById FAILED";
        echo "testGetRestaurantByName FAILED";
        echo "testGetOrderAll FAILED";
        echo "testGetOrderById FAILED";
        echo "testCreateMenuItem FAILED";
        echo "testGetMenuItemAll FAILED";
        echo "testGetMenuById FAILED";
fi