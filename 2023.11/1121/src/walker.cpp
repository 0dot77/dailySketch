#include "walker.hpp"

walker::walker()
{
    
}

void walker::setup()
{
    pos = ofVec2f(ofGetWidth()/2, ofGetHeight()/2);
    randomStepNum = ofRandom(1,5);
    phaseStepNum = 0;
    walkerSize = 5;
}

void walker::update()
{
    int getRandomNumber = ofRandom(0,4);
    int getElapsedNumber = trunc(ofGetElapsedTimef());
    
    
    //cout << getElapsedNumber % 10 << endl;
    
    // 10초마다 하나의 스텝을 추가하기
    if(getElapsedNumber % 10 == 0)
    {
        phaseStepNum += ofGetElapsedTimef() * 0.1;
        walkerSize = ofRandom(4, 10);
    }
    
    
    //cout << ofGetElapsedTimef() << endl;
    //cout << getRandomNumber << endl;
    
    if(getRandomNumber == 0)
    {
        pos.x += (sin(randomStepNum * ofGetElapsedTimeMillis()) + phaseStepNum);
    } else if (getRandomNumber == 1)
    {
        pos.x -= (sin(randomStepNum * ofGetElapsedTimeMillis()) + phaseStepNum);
    } else if (getRandomNumber == 2)
    {
        pos.y += (sin(randomStepNum * ofGetElapsedTimeMillis()) + phaseStepNum);
    } else if (getRandomNumber == 3)
    {
        pos.y -= (sin(randomStepNum * ofGetElapsedTimeMillis()) + phaseStepNum);
    }
    
    
}

void walker::draw()
{
    ofDrawCircle(pos.x, pos.y, walkerSize);
}

