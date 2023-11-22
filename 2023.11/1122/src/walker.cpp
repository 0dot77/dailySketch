//
//  walker.cpp
//  1122
//
//  Created by Yoo taeyang on 11/22/23.
//

#include "walker.hpp"

Walker::Walker()
{
    
}

void Walker::setup()
{
    //walkerPos.set(ofRandom(100, ofGetWidth()-100), ofRandom(100, ofGetHeight()-100));
    walkerPos = ofVec2f(ofRandom(100, ofGetWidth()-100), ofRandom(100, ofGetHeight()-100));
    
    walkerSize = ofRandom(10,20);
}

void Walker::update()
{
    int choiceRandNum = ofRandom(0,4);
    int MOVE_NUM = ofRandom(3,10);
    
    //cout << choiceRandNum << endl;
    
    if(choiceRandNum == 0)
    {
        walkerPos.x += MOVE_NUM;
    } else if (choiceRandNum == 1)
    {
        walkerPos.x -= MOVE_NUM;
    } else if (choiceRandNum == 2)
    {
        walkerPos.y += MOVE_NUM;
    } else if (choiceRandNum == 3)
    {
        walkerPos.y -= MOVE_NUM;
    }
}

void Walker::draw()
{
    //ofDrawCircle(ofGetWidth()/2, ofGetHeight()/2, 30);
    ofDrawCircle(walkerPos.x, walkerPos.y, walkerSize);
}
