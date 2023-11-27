//
//  walker.hpp
//  1127
//
//  Created by Yoo taeyang on 11/27/23.
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
    int frameRate;
    int checkDrawCount;
};

#endif /* walker_hpp */
