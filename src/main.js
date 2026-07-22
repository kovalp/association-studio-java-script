import {BoxBackendUi} from "./ui/box_backend_ui.js";
import {ToolPanels} from "./ui/tool_panels.js";
import {AxesIoU} from "./metrics/axes/axes_iou_score.js";
import {MahalanobisScore} from "./metrics/mahalanobis/mahalanobis_score.js";

const iou_score = new AxesIoU()
const mahalanobis_score = new MahalanobisScore()
const ori_state = [0.0, 0.0, 0.0, 3.0, 1.5]
iou_score.set_ref(ori_state);
mahalanobis_score.set_ref(ori_state);

const ini_state = [0.5, -0.5, 0.0, 3.0, 1.5]
const back_bg = new BoxBackendUi('stage-bg', '#00fa', ori_state);
const back_ui = new BoxBackendUi('stage-ui', '#f0fa', ini_state);
const tool_panels = new ToolPanels();


function set_state(xy_yaw_lw){
    tool_panels.set_state(xy_yaw_lw)
    const score1 = iou_score.compute_for(xy_yaw_lw)
    const score2 = mahalanobis_score.compute_for(xy_yaw_lw)
    tool_panels.set_scores(score1, score2)
    tool_panels.sqr_pos_diff.textContent = mahalanobis_score.pair.sqr_pos_diff.toFixed(2)
    tool_panels.sqr_yaw_diff.textContent = mahalanobis_score.pair.sqr_yaw_diff.toFixed(2)
    tool_panels.sqr_size_diff.textContent = mahalanobis_score.pair.sqr_size_diff.toFixed(2)
    tool_panels.sqr_maha_dist.textContent = mahalanobis_score.pair.sqr_maha_dist.toFixed(3)
}

back_ui.set_change_state_callback(set_state);

back_bg.resize_canvas_callback()
back_ui.resize_canvas_callback()

tool_panels.inp_x.addEventListener("change", back_ui.change_x.bind(back_ui));
tool_panels.inp_y.addEventListener("change", back_ui.change_y.bind(back_ui));
tool_panels.inp_yaw.addEventListener("change", back_ui.change_yaw.bind(back_ui));
tool_panels.inp_len.addEventListener("change", back_ui.change_len.bind(back_ui));
tool_panels.inp_wdt.addEventListener("change", back_ui.change_wdt.bind(back_ui));
tool_panels.reset_btn.addEventListener("click", () => {back_ui.set_state(ori_state);})


function change_mahalanobis_precision(event){
    const t = event.target
    if (t.id === "precision-pos"){
        mahalanobis_score.pair.dia_inv_cov[0] = Number(t.value)
        mahalanobis_score.pair.dia_inv_cov[1] = Number(t.value)
    } else if (t.id === "precision-yaw"){
        mahalanobis_score.pair.dia_inv_cov[2] = Number(t.value)
        mahalanobis_score.pair.dia_inv_cov[3] = Number(t.value)
    } else if (t.id === "precision-size") {
        mahalanobis_score.pair.dia_inv_cov[4] = Number(t.value)
        mahalanobis_score.pair.dia_inv_cov[5] = Number(t.value)
    }

    set_state(back_ui.box.xy_yaw_lw)
}

tool_panels.inp_precision_pos.addEventListener("change", change_mahalanobis_precision)
tool_panels.inp_precision_yaw.addEventListener("change", change_mahalanobis_precision)
tool_panels.inp_precision_size.addEventListener("change", change_mahalanobis_precision)
