import React, { useState } from "react";
import CustomButton from "../ui-custom/CustomButton";
import { User } from "lucide-react";
import {
  setSideNavFoldability,
  setSideNavVisibility,
} from "@/redux/slices/NavView";
import { useDispatch, useSelector } from "react-redux";

export default function SideNav({ sideNavHidden }) {
  const dispatch = useDispatch();
  const isSideNavFolded = useSelector((state) => state.navView.isSideNavFolded);
  const isSideNavVisible = useSelector(
    (state) => state.navView.isSideNavVisible
  );

  const cmn_icn_class = "w-7 h-7 rounded-full border border-red-400";
  const widthControl = () => isSideNavFolded ? "w-4.0 flex sm:relative absolute flex-col justify-between gap-4 " : "w-16.0";
  const visibilityControl = () =>
    isSideNavVisible
      ? "block flex sm:relative absolute flex-col justify-between gap-4  "
      : "hidden";

  return (
    <div
      className={` ${widthControl()} ${visibilityControl()} min-h-screen max-h-screen  bg-amber-200 `}
    >
      <div className={visibilityControl}>Side Nav</div>

      <div className="flex-grow   flex flex-col  justify-between gap-4 overflow-y-scroll">
        <div>
          <CustomButton
            id="pokath"
            // afterHover={(e) =>
            //    alert(document.getElementById("pokath").offsetTop)
            // }
            startIcon={<User className={cmn_icn_class} />}
            txt={isSideNavFolded ? "modal" : " many many text"}
            style="border-2 border-teal-600"
          />
        </div>
        <div>
          <CustomButton
            id="pussy"
            // afterHover={(e) =>
            //    alert(document.getElementById("pussy").offsetTop)
            // }
            startIcon={<User className={cmn_icn_class} />}
            txt={isSideNavFolded ? "" : " many many text"}
            style="border-2 border-teal-600"
          />
          {isSideNavFolded ? (
            <div className="relative">
              <div className="absolute left-[100px]  top-auto w-8.0 h-4.0">
                <span>obj-modal</span>
              </div>
            </div>
          ) : null}
        </div>
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
        <CustomButton
          startIcon={<User className={cmn_icn_class} />}
          txt={isSideNavFolded ? "" : " many many text"}
          style="border-2 border-teal-600"
        />
      </div>

      <div>
        <CustomButton
          txt={JSON.stringify(isSideNavFolded)}
          afterClick={() =>
            dispatch(setSideNavFoldability({ isSideNavFolded: !isSideNavFolded }))
          }
          style="border-2 border-teal-600 text-5xl w-full "
        />
      </div>
    </div>
  );
}
