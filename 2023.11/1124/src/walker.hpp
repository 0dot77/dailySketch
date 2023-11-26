//
//  walker.hpp
//  1124
//
//  Created by Yoo taeyang on 11/25/23.
//

#ifndef walker_hpp
#define walker_hpp

#include <stdio.h>
#include "ofMain.h"

class Walker {
public:
    Walker();
    ~Walker();
    void setup();
    void update();
    void draw();
    ofVec2f getRandomTargetPos(ofVec2f currentPos);
    
    ofVec2f walkerPos;
    ofVec2f updatedPos;
    ofVec2f previousPos;
    
    int setRandomAlpha;
    
    float walkerSize;
    bool startMove = false;
};

#endif /* walker_hpp */
