//
//  CoolWebViewManager.swift
//  AuthWithYandexExample
//
//  Created by Abdurahmon Ziyodov on 19/12/23.
//

import Foundation
import UIKit

@objc(CoolWebViewManager)
class CoolWebViewManager: RCTViewManager {
  override func view() -> UIView! {
    let label = UILabel()
    label.text = "Hey there!!"
    label.textAlignment = .center
    label.backgroundColor = UIColor.red
    return label
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
