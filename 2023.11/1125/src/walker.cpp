//
//  walker.cpp
//  1125
//
//  Created by Yoo taeyang on 11/25/23.
//

#include "walker.hpp"

// 노트
/*
 부들부들 떨다가, 몇 회 이상 떨었을 때 각자의 방향으로 전체 이동
 */

Walker::Walker()
{
    checkShakingNum = 0;
}

Walker::~Walker()
{
    
}

void Walker::setup()
{
    walkerSize = ofRandom(10, 30);
    walkerPos.set(ofRandom(100, ofGetWidth()-100), ofRandom(100, ofGetHeight()-100));
    
    // 첫 위치 저장
    originWalkerPos = walkerPos;
}

void Walker::update()
{
    //float shaking = ofMap(sin(ofGetElapsedTimeMillis()), 0, 1, -5, 5);
    float amplitude = 1.0f;
    float frequency = 2.0f;
    float sinShaking = amplitude * sin(ofGetElapsedTimef() * frequency);
    float cosShaking = amplitude * cos(ofGetElapsedTimef() * frequency);
    
    if(walkerPos.distance(originWalkerPos) < 0.25)
    {
        checkShakingNum += 1;
        //cout << "check" << checkShakingNum << endl;
    }
   
    if(checkShakingNum < 5)
    {
        walkerPos.x += sinShaking;
    } else if (checkShakingNum > 5 && checkShakingNum < 10)
    {
        walkerPos.y += sinShaking;
    } else if (checkShakingNum > 10)
    {
        walkerPos += ofVec2f(sinShaking * 2, cosShaking * 2);
    }
}

void Walker::draw()
{
    ofSetColor(172, 127 * sin(ofGetElapsedTimef() * 100));
    ofNoFill();
    ofDrawCircle(walkerPos.x, walkerPos.y, walkerSize);
}

