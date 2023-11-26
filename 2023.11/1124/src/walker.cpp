//
//  walker.cpp
//  1124
//
//  Created by Yoo taeyang on 11/25/23.
//

#include "walker.hpp"

Walker::Walker(){
    
}

Walker::~Walker()
{
    
}

void Walker::setup()
{
    walkerPos.set(ofRandom(100, ofGetWidth()-100), ofRandom(100, ofGetHeight()-100));
    walkerSize = ofRandom(10, 30);
}

void Walker::update()
{
   if (!startMove)
   {
       //previousPos = walkerPos;
       updatedPos = getRandomTargetPos(walkerPos);
       //cout << updatedPos << endl;
       setRandomAlpha = ofRandom(50, 174);
       startMove = true;
   } else if (startMove && walkerPos != updatedPos) {
       walkerPos.interpolate(updatedPos, 0.1);
       
   }
    if (walkerPos.distance(updatedPos) < 0.01)
   {
       //cout << "여기서 동작해야 함" << endl;
       startMove = false;
   }
    
    //cout << startMove << endl;
    //cout << walkerPos.distance(updatedPos) << endl;
    //cout << "previous" << previousPos << "now" << walkerPos << "updated" << updatedPos << endl;
}

void Walker::draw()
{
    ofSetColor(255, 255, 255, setRandomAlpha);
    ofNoFill();
    ofDrawCircle(walkerPos.x, walkerPos.y, walkerSize);
}

// 현재 위치 값을 넣어서 위치값에 새로 이동할 타겟 포지션을 얻는다.
ofVec2f Walker::getRandomTargetPos(ofVec2f currentPos)
{
    ofVec2f randomTargetPos = ofVec2f(ofRandom(-30,30), ofRandom(-30,30));
    ofVec2f updatedCurrentPos = currentPos + randomTargetPos;
    return updatedCurrentPos;
}
