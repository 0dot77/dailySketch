//
//  walker.cpp
//  1126
//
//  Created by Yoo taeyang on 11/26/23.
//

#include "walker.hpp"

Walker::Walker()
{
    frameCounter = 0;
}

Walker::~Walker()
{
    
}

void Walker::setup()
{
    walkerSize = ofRandom(10,30);
    walkerPos.set(ofRandom(50, ofGetWidth()-50), ofRandom(50, ofGetHeight()-50));
    targetRandomPos.set(ofRandom(ofGetWidth()), ofRandom(ofGetHeight()));
}

void Walker::update()
{
    frameCounter++;
    
    if(frameCounter > 120)
    {
        targetRandomPos.set(ofRandom(ofGetWidth()), ofRandom(ofGetHeight()));
//        int choiceNumber = ofRandom(0, 4);
        //ofSetColor(ofRandom(255), ofRandom(255), ofRandom(255), ofRandom(100,190));
        
//        if(choiceNumber == 0)
//        {
//
//        } else if (choiceNumber == 1)
//        {
//            
//        } else if (choiceNumber == 2)
//        {
//            
//        } else if (choiceNumber == 3)
//        {
//            
//        }
        frameCounter = 0;
    }
    walkerMove();
}

void Walker::draw()
{
    //ofSetColor(255,255,255,100);
    ofSetColor(100,100,100,80);
    ofNoFill();
    ofDrawCircle(walkerPos.x, walkerPos.y, walkerSize);
}

void Walker::walkerMove()
{
    walkerPos.interpolate(targetRandomPos, ofRandom(1,3));
}
