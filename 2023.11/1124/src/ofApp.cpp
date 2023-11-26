#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetCircleResolution(100);
    ofSetBackgroundColor(0);
    
    fbo.allocate(ofGetWidth(), ofGetHeight());
    
    walkers.assign(ofRandom(10,100), Walker());
    
    for (vector<Walker>::iterator it = walkers.begin(); it != walkers.end(); ++it)
    {
        it -> setup();
    }
}

//--------------------------------------------------------------
void ofApp::update(){
    for (vector<Walker>::iterator it = walkers.begin(); it != walkers.end(); ++it)
    {
        it -> update();
    }
}

//--------------------------------------------------------------
void ofApp::draw(){
    
    fbo.begin();
    
    for (vector<Walker>::iterator it = walkers.begin(); it != walkers.end(); ++it)
    {
        it -> draw();
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
//    ostringstream oss;
//    int imgNum = ofRandom(10000);
//    oss << "img_" << imgNum << ".png";
//    img.grabScreen(0, 0, ofGetWidth(), ofGetHeight());
//    img.save(oss.str());

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
