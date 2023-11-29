//
//  walker.cpp
//  1127
//
//  Created by Yoo taeyang on 11/27/23.
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
    walkerSize = ofRandom(10,30);
    walkerPos.set(ofRandom(50, ofGetWidth()), ofRandom(50, ofGetHeight()));
    checkDrawCount = 0;
}

void Walker::update()
{
    frameRate++;

    if(frameRate > 60 && checkDrawCount < 30)
    {
        checkDrawCount++;
        walkerSize = ofRandom(200) * sin(ofGetElapsedTimef() * 10.0);
        frameRate = 0;
    } else if (checkDrawCount < 30) {
        walkerSize = 50.0 * sin(ofGetElapsedTimef() * 0.35);
    }
    
}

void Walker::draw()
{
    ofSetColor(100,100, 200 * sin(ofGetElapsedTimef() * 0.5), 150);
    ofNoFill();
    ofDrawCircle(walkerPos.x, walkerPos.y, walkerSize);
}
