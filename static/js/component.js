const engineerRobot = "engineerRobot";
const dartSystem = `
            <!-- introduce -->
            <div id="dart-introduce" class="flex-row font-size-context font-style">
                <p>Dart System consists of two subsystem:&nbsp;</p>
                <ul class="flex-row">
                    <li><strong>one launcher</strong></li>
                    &nbsp;and&nbsp;
                    <li><strong>four gliders</strong></li>
                </ul>
            </div>
            <!-- Launcher -->
            <div class="brder-system">
                <h3 class="system-color font-style font-size-title">Launcher</h3>
                <div class="font-style font-size-context margin-style border-edge">
                    <h4 class="font-color font-style font-size-subtitle">Functions of Launcher</h4>
                    <div class="flex-row">
                        <img class="image-height" src="./static/image/dart_image/launcher1.png" alt="launcher1">
                        <img class="image-height" src="./static/image/dart_image/launcher2.png" alt="launcher2">
                        <img class="image-height" src="./static/image/dart_image/launcher3.png" alt="launcher3">
                    </div>
                    <div class="margin-style">
                        <div class="flex-row">
                            <p>
                                Launcher’s Functions:&nbsp;
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        NO.1 Accurately launch a glider drone in different high speed(16m/s)
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        NO.2 Automatically reload glider drones.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <p>
                            After 7 strategy iteration, the launcher has a notable perform.
                        </p>
                    </div>
                </div>
                <div class="font-style font-size-context margin-style border-edge">
                    <h4 class="font-color font-style font-size-subtitle">Accelerator</h4>
                    <div class="flex-row justify-center">
                        <img class="image-height" src="./static/image/dart_image/Accelerator2.png"
                            alt="Accelerator2.png">
                        <img class="image-height" src="./static/image/dart_image/Accelerator3.png"
                            alt="Accelerator3.png">
                    </div>
                    <p style="text-align: center;">
                        <video height="250px" src="./static/video/dart_vedio/Accelerator2.mp4" autoplay loop></video>
                    </p>
                    <div class="flex-row video-height justify-center">
                        <video src="./static/video/dart_vedio/Accelerator0.mp4" autoplay loop></video>
                        <video src="./static/video/dart_vedio/Accelerator1.mp4" autoplay loop></video>
                    </div>
                    <div class="margin-style">
                        <p>Ingeniously apply the meshing between double-sided synchronous belt and connecting plate to
                            convert the accurate circular motion of motors into linear motion. It firstly save energy in
                            the high-inertial subsystem and reach a high but stable speed, and then send the plate with
                            a rack to accommodate a glider to mesh with the outer teeth of the belt.</p>
                    </div>
                </div>
                <div class="font-style font-size-context margin-style border-edge">
                    <h4 class="font-color font-style font-size-subtitle">Decelerate and Deadlock Mechanism</h4>
                    <p style="text-align: center;">
                        <img height="250px" margin="auto" src="./static/image/dart_image/Decelerate 2.png" alt="">
                    </p>
                    <div class="flex-row video-height justify-center">
                        <img src="./static/video/dart_vedio/Decelerate0.gif" alt="decelerate0"></img>
                        <video src="./static/video/dart_vedio/Decelerate1.mp4" autoplay loop></video>
                    </div>
                    <div class="margin-style">
                        <p>The rack attaches to the connecting plate is decelerated with dampening springs and locked with a rachet mechanism once the drone is ejected out; rack is finally released with a linear actuator unlocking mechanism.</p>
                    </div>
                </div>
                <div class="font-style font-size-context margin-style border-edge">
                    <h4 class="font-color font-style font-size-subtitle">Reloading Mechanism</h4>
                    <div class="flex-row justify-center">
                        <img class="image-height" src="./static/image/dart_image/Reloading1.png"
                            alt="Accelerator2.png">
                        <img class="image-height" src="./static/image/dart_image/Reloading2.png"
                            alt="Accelerator3.png">
                    </div>
                    <p style="text-align: center;">
                        <video height="250px" src="./static/video/dart_vedio/Reloading0.mp4" autoplay loop></video>
                    </p>
                    <div class="margin-style">
                        <p>A curved-rail-guided system that relocates drones onto launching rack using one single actuator.</p>
                    </div>
                </div>
                <div class="font-style font-size-context margin-style border-edge">
                    <h4 class="font-color font-style font-size-subtitle">DIY designed Yaw Bearing</h4>
                    <div class="flex-row justify-center">
                        <img class="image-height" src="./static/image/dart_image/Bearing0.png"
                            alt="Bearing0.jpg">
                        <img class="image-height" src="./static/image/dart_image/Bearing1.jpg"
                            alt="Bearing1.jpg">
                    </div>
                    <div class="margin-style">
                        <p>Self-designed and manufactured a ring bearing for launcher’s yaw axis. Minimizes backlash and off-axis movements while reducing overall system cost compared to industrial counterparts.</p>
                    </div>
                </div>
            </div>

            <div class="brder-system margin-top">
                <h3 class="system-color font-style font-size-title">Glider</h3>
                <div class="font-style font-size-context margin-style border-edge">
                    <h4 class="font-color font-style font-size-subtitle">Drone with 3D Vector-actuator</h4>
                    <div class="flex-row justify-center">
                        <img class="image-height" src="./static/image/dart_image/Vector0.PNG"
                            alt="Vector0.PNG">
                        <img class="image-height" src="./static/image/dart_image/Vector1.PNG"
                            alt="Vector1.PNG">
                    </div>
                    <div class="margin-style">
                        <p>Banded for its excessive flexibility.</p>
                    </div>
                </div>
                <div class="font-style font-size-context margin-style border-edge">
                    <h4 class="font-color font-style font-size-subtitle">Fixed Wing UAV</h4>
                    <div class="flex-row justify-center">
                        <img class="image-height" src="./static/image/dart_image/UAV1.PNG"
                            alt="UAV1.PNG">
                        <img class="image-height" src="./static/image/dart_image/UAV2.png"
                            alt="UAV2.PNG">
                    </div>
                    <div class="flex-row justify-center">
                        <img class="image-height" src="./static/image/dart_image/UAV3.PNG"
                            alt="UAV3.PNG">
                        <img class="image-height" src="./static/image/dart_image/UAV4.PNG"
                            alt="UAV4.PNG">
                    </div>
                    <p style="text-align: center;">
                        <video height="250px" src="./static/video/dart_vedio/UAV0.mp4" autoplay loop></video>
                    </p>
                    <div class="margin-style">
                        <p>Banded for its excessive flexibility.</p>
                    </div>
                </div>
            </div>

            <!--  -->
            <div class="border-edge">
                <div></div>
                <div></div>
            </div>
    `;
const autonomousRobot = "autonomousRobot";
const courseProject = "courseProject";
function changeContent(event,choice){
    const main = document.getElementById("content");
    var html = engineerRobot;
    switch(choice){
        case 0:
            html = engineerRobot;
            break;
        case 1:
            html = dartSystem;
            break;
        case 2:
            html = autonomousRobot;
            break;
        case 3:
            html = courseProject;
            break;
    }
    main.innerHTML = html;
}