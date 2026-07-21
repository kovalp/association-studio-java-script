import {BoxBackendUi} from "./ui/box_backend_ui.js";
import {TopPanel} from "./ui/top_panel.js";
import {AxesIoU} from "./metrics/axes/axes_iou_score.js";
import {MahalanobisScore} from "./metrics/mahalanobis/mahalanobis_score.js";

const iou_score = new AxesIoU()
const mahalanobis_score = new MahalanobisScore()
const ori_state = [0.0, 0.0, 0.0, 3.0, 1.5]
iou_score.set_ref(ori_state);
mahalanobis_score.set_ref(ori_state);

const ini_state = [0.6, -0.6, 0.0, 3.0, 1.5]
const back_bg = new BoxBackendUi('stage-bg', '#00fa', ori_state);
const back_ui = new BoxBackendUi('stage-ui', '#f0fa', ini_state);
const top_panel = new TopPanel();


function set_state(xy_yaw_lw){
    top_panel.set_state(xy_yaw_lw)
    const score1 = iou_score.compute_for(xy_yaw_lw)
    const score2 = mahalanobis_score.compute_for(xy_yaw_lw)
    top_panel.set_scores(score1, score2)
}

back_ui.set_change_state_callback(set_state);

back_bg.resize_canvas_callback()
back_ui.resize_canvas_callback()

top_panel.inp_x.addEventListener("change", back_ui.change_x.bind(back_ui));
top_panel.inp_y.addEventListener("change", back_ui.change_y.bind(back_ui));
top_panel.inp_yaw.addEventListener("change", back_ui.change_yaw.bind(back_ui));
top_panel.inp_len.addEventListener("change", back_ui.change_len.bind(back_ui));
top_panel.inp_wdt.addEventListener("change", back_ui.change_wdt.bind(back_ui));

top_panel.reset_btn.addEventListener("click", () => {back_ui.set_state(ori_state);})
