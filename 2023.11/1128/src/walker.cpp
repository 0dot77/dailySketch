//
//  walker.cpp
//  1128
//
//  Created by Yoo taeyang on 11/28/23.
//

#include "walker.hpp"

Walker::Walker()
{
    frameCount = 0;
}

Walker::~Walker()
{
    
}

void Walker::setup()
{
    walkerSize = ofRandom(10,30);
    walkerPos.set(ofRandom(50, ofGetWidth()), ofRandom(50, ofGetHeight()));
    ofSetRandomSeed(ofRandom(300));
}

void Walker::update()
{
    frameCount++;
    
    float sinColorValue = ofMap(sin(frameCount * 0.035), -1, 1, 100, 255);
    float cosColorValue = ofMap(cos(frameCount * 0.015), -1, 1, 122, 255);
    if(frameCount % 60 < 35)
    {
        drawNoFill(sinColorValue);
        walkerSize = ofRandom(1,50) + 20 * sin(ofGetElapsedTimef() * 0.35);
        ofVec2f randomTargetPos = ofVec2f(ofRandom(-10,10), ofRandom(-10,10));
        ofVec2f targetPos = walkerPos + randomTargetPos;
        walkerPos.interpolate(targetPos, 0.5f);
    } else {
        drawFill(cosColorValue);
        walkerSize = ofRandom(1,10) + 20 * sin(ofGetElapsedTimef() * 0.35);
        walkerPos += ofVec2f(ofRandom(-1,1), ofRandom(-1,1));
    }
    
}

void Walker::draw()
{
    ofDrawCircle(walkerPos.x, walkerPos.y, walkerSize);
    
}

void Walker::drawFill(float val)
{
    ofSetColor(val, 100, 100);
    ofFill();
}

void Walker::drawNoFill(float val)
{
    ofSetColor(0,val,100,255);
    ofNoFill();
}


