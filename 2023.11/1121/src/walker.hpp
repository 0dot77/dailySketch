#ifndef walker_hpp
#define walker_hpp

#include <stdio.h>
#include <ofMain.h>

class walker {
public:
    walker();
    
    void setup();
    void update();
    void draw();
    
    ofVec2f pos;
    float walkerSize;
    int randomStepNum;
    int phaseStepNum;
};

#endif /* walker_hpp */
