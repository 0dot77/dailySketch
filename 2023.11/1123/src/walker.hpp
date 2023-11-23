//
//  walker.hpp
//  1123
//
//  Created by Yoo taeyang on 11/24/23.
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
    void setCircleShape(int numForShape);

private:
    ofVec2f walkerPos;
    int walkerSize;
};

#endif /* walker_hpp */
