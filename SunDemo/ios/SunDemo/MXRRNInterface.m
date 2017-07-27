//
//  MXRRNInterface.m
//  LYCRNTest
//
//  Created by yuchen.li on 2017/7/18.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "MXRRNInterface.h"
#import "MXRBase64.h"


@implementation MXRRNInterface
RCT_EXPORT_MODULE();

/**
 base64 解码
 
 @param NSString
 @return
 */
RCT_EXPORT_METHOD(decodeBase64WithString:(NSString *)stringToDecode
                  callback:(RCTResponseSenderBlock)callBack){
  
  NSLog(@"base64 解码");
  callBack(@[RCTNullIfNil([MXRBase64 decodeBase64WithString:stringToDecode])]);
}


/**
 base64 编码

 @param NSString
 @return
 */
RCT_EXPORT_METHOD(encodeBase64WithString:(NSString *)stringToEncode
                  callback:(RCTResponseSenderBlock)callBack){
    NSLog(@"base64 编码");
  callBack(@[RCTNullIfNil([MXRBase64 encodeBase64WithString:stringToEncode])]);
}



@end
