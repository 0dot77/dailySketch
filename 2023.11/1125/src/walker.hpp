//
//  walker.hpp
//  1125
//
//  Created by Yoo taeyang on 11/25/23.
//

#ifndef walker_hpp
#define walker_hpp

#include <stdio.h>
#include "ofMain.h"

class Walker{
    
public:
    Walker();
    ~Walker();
    void setup();
    void update();
    void draw();
    
    ofVec2f walkerPos;
    float walkerSize;
    int checkShakingNum;
    ofVec2f originWalkerPos;
};

#endif /* walker_hpp */
