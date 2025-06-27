import React, { useState, useEffect } from "react";
import UserNav from "../Common/UserNav";
import { toast } from "react-toastify";

const Notification = () => {
  // State for notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    platformNotifications: true,
    generateNotification: false,
    newNotification: true,
    newComment: true,
    randomMessage: false,
    mentioned: true,
    textNotification: false,
    teamNewNotification: true,
    teamRandomMessage: false,
    synapseNotification: true,
    synapseNewComment: true
  });

  // Load saved settings on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("notificationSettings");
    if (savedSettings) {
      setNotificationSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Handle checkbox changes
  const handleCheckboxChange = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  // Handle master toggle for all platform notifications
  const handlePlatformToggle = (value) => {
    setNotificationSettings(prev => ({
      ...prev,
      platformNotifications: value,
      // If turning off, disable all platform notifications
      ...(value === false && {
        generateNotification: false,
        newNotification: false,
        newComment: false,
        randomMessage: false,
        mentioned: false,
        textNotification: false
      })
    }));
  };

  // Save changes
  const saveChanges = () => {
    localStorage.setItem("notificationSettings", JSON.stringify(notificationSettings));
    toast.success("Notification settings saved successfully!");
  };

  return (
    <>
      <div className="rbt-main-content mb-0">
        <div className="rbt-daynamic-page-content center-width">
          <div className="rbt-dashboard-content">
            <UserNav title="Notification" />

            <div className="content-page pb--50">
              <div className="chat-box-list">
                <div className="single-settings-box notification-box overflow-hidden">
                  <div className="form-check form-switch notification-box-switch">
                    <h4 className="title">Notification</h4>
                    <label className="switch-toggle">
                      <input
                        type="checkbox"
                        checked={notificationSettings.platformNotifications}
                        onChange={() => handlePlatformToggle(!notificationSettings.platformNotifications)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="rbt-sm-separator mt-0"></div>
                  <div className="rbt-checkbox-grp">
                    <h5 className="title">Rainbow Platform</h5>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-1"
                        name="rbt-checkbox-1"
                        type="checkbox"
                        checked={notificationSettings.generateNotification}
                        onChange={() => handleCheckboxChange("generateNotification")}
                        disabled={!notificationSettings.platformNotifications}
                      />
                      <label htmlFor="rbt-checkbox-1">
                        Generate Notification
                      </label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-2"
                        name="rbt-checkbox-2"
                        type="checkbox"
                        checked={notificationSettings.newNotification}
                        onChange={() => handleCheckboxChange("newNotification")}
                        disabled={!notificationSettings.platformNotifications}
                      />
                      <label htmlFor="rbt-checkbox-2">New Notification</label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-3"
                        name="rbt-checkbox-3"
                        type="checkbox"
                        checked={notificationSettings.newComment}
                        onChange={() => handleCheckboxChange("newComment")}
                        disabled={!notificationSettings.platformNotifications}
                      />
                      <label htmlFor="rbt-checkbox-3">New Comment</label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-4"
                        name="rbt-checkbox-4"
                        type="checkbox"
                        checked={notificationSettings.randomMessage}
                        onChange={() => handleCheckboxChange("randomMessage")}
                        disabled={!notificationSettings.platformNotifications}
                      />
                      <label htmlFor="rbt-checkbox-4">Random Message</label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-5"
                        name="rbt-checkbox-5"
                        type="checkbox"
                        checked={notificationSettings.mentioned}
                        onChange={() => handleCheckboxChange("mentioned")}
                        disabled={!notificationSettings.platformNotifications}
                      />
                      <label htmlFor="rbt-checkbox-5">Mentioned</label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-6"
                        name="rbt-checkbox-6"
                        type="checkbox"
                        checked={notificationSettings.textNotification}
                        onChange={() => handleCheckboxChange("textNotification")}
                        disabled={!notificationSettings.platformNotifications}
                      />
                      <label htmlFor="rbt-checkbox-6">Text Notification</label>
                    </div>
                  </div>
                  <div className="rbt-checkbox-grp">
                    <h5 className="title">From team</h5>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-7"
                        name="rbt-checkbox-7"
                        type="checkbox"
                        checked={notificationSettings.teamNewNotification}
                        onChange={() => handleCheckboxChange("teamNewNotification")}
                      />
                      <label htmlFor="rbt-checkbox-7">New Notification</label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-8"
                        name="rbt-checkbox-8"
                        type="checkbox"
                        checked={notificationSettings.teamRandomMessage}
                        onChange={() => handleCheckboxChange("teamRandomMessage")}
                      />
                      <label htmlFor="rbt-checkbox-8">Random Message</label>
                    </div>
                  </div>
                  <div className="rbt-checkbox-grp">
                    <h5 className="title">From Synapse</h5>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-9"
                        name="rbt-checkbox-9"
                        type="checkbox"
                        checked={notificationSettings.synapseNotification}
                        onChange={() => handleCheckboxChange("synapseNotification")}
                      />
                      <label htmlFor="rbt-checkbox-9">Mentioned</label>
                    </div>
                    <div className="rbt-checkbox-wrapper">
                      <input
                        id="rbt-checkbox-11"
                        name="rbt-checkbox-11"
                        type="checkbox"
                        checked={notificationSettings.synapseNewComment}
                        onChange={() => handleCheckboxChange("synapseNewComment")}
                      />
                      <label htmlFor="rbt-checkbox-11">New Comment</label>
                    </div>
                  </div>
                  <div className="form-group mt--40 mb--0">
                    <button className="btn-default" onClick={saveChanges}>
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;

