#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetFrameRate(60);
    ofSetBackgroundColor(0);
    ofSetCircleResolution(100);
    
    fbo.allocate(ofGetWidth(), ofGetHeight());
    fbo.begin();
    ofClear(255);
    fbo.end();
    
    walkers.assign(ofRandom(10,20), Walker());
    
    for (int i = 0; i < walkers.size(); i++)
    {
        walkers[i].setup();
    }

}

//--------------------------------------------------------------
void ofApp::update(){
    
    for (int i = 0; i < walkers.size(); i++)
    {
        walkers[i].update();
    }


}

//--------------------------------------------------------------
void ofApp::draw(){
   
        fbo.begin();
        for (Walker w : walkers)
        {
            ofSetColor(127 * sin(ofGetElapsedTimef() * 0.015), 127 * sin(ofGetElapsedTimef() * 0.05), 127 * sin(ofGetElapsedTimef() * 0.12));
            w.draw();
        }
        fbo.end();
        
        fbo.draw(0,0);

}

//--------------------------------------------------------------
void ofApp::exit(){

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

    img.grabScreen(0, 0, ofGetWidth(), ofGetHeight());
    img.save("1122_3.png");
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseScrolled(int x, int y, float scrollX, float scrollY){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
