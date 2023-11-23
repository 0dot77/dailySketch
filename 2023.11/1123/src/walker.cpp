//
//  walker.cpp
//  1123
//
//  Created by Yoo taeyang on 11/24/23.
//

#include "walker.hpp"


Walker::Walker()
{
    
}

Walker::~Walker()
{
    
}

void Walker::setup()
{
    walkerPos.set(ofRandom(100, ofGetWidth()-100), ofRandom(100, ofGetHeight()-100));
    walkerSize = ofRandom(5,30);
}

void Walker::update()
{
    float randomNum = ofRandom(0, 4);
    float choicedNum = ofRandom(-10,10);
    
    //cout << randomNum << endl;
    
    if(randomNum > 0 && randomNum < 1)
    {
        walkerPos.x += (choicedNum + sin(ofGetElapsedTimef()));
    } else if (randomNum < 2 && randomNum > 1)
    {
        walkerPos.x -= (choicedNum + cos(ofGetElapsedTimef()));
    } else if (randomNum > 2 && randomNum < 3)
    {
        walkerPos.y += (choicedNum + sin(ofGetElapsedTimef()));
    } else if (randomNum > 3 && randomNum < 4)
    {
        walkerPos.y -= (choicedNum + cos(ofGetElapsedTimef()));
    }
}

void Walker::draw()
{
    setCircleShape(ofRandom(0,2));
    ofDrawCircle(walkerPos.x, walkerPos.y, walkerSize);
    //ofDrawCircle(walkerPos.x + 10, walkerPos.y + 10, walkerSize/2);
    //ofDrawCircle(walkerPos.x - 10, walkerPos.y + 10, walkerSize/2);
}

void Walker::setCircleShape(int numForShape)
{
    if(numForShape == 0)
    {
        ofNoFill();
    } else
    {
        ofFill();
    }
}
