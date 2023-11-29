//
//  walker.cpp
//  1129
//
//  Created by Yoo taeyang on 11/29/23.
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
    frameRate = 0;
    walkerSize = ofRandom(10,30);
    randomInterpolateTime = 0.1f;
    
    walkerPos.set(ofRandom(50, ofGetWidth()-50), ofRandom(50, ofGetHeight()-50));
    targetPos.set(ofRandom(51, ofGetWidth()-50), ofRandom(49, ofGetHeight()-50));
    
//    cout << "waker" << walkerPos << " " << "target" << targetPos << endl;
}

void Walker::update()
{
    if(walkerPos.distance(targetPos) > 0.1)
    {
//        cout << "working" << endl;
        walkerPos.interpolate(targetPos, randomInterpolateTime);
    } else {
        targetPos.set(ofRandom(51, ofGetWidth()-50), ofRandom(49, ofGetHeight()-50));
        randomInterpolateTime = ofRandom(0,0.8);
    }
}

void Walker::draw()
{
//    cout << walkerPos << endl;
    ofSetColor(127 + 127 * sin(ofGetElapsedTimef() * 0.35), 127 + 127 * sin(ofGetElapsedTimef() * 0.4), 127 + 127 * sin(ofGetElapsedTimef() * 0.12),200);
    ofNoFill();
    ofDrawCircle(walkerPos.x, walkerPos.y, walkerSize);
}





