"use client";
import React, { useEffect, useRef } from "react";
import CustomButton from "../ui-custom/CustomButton";
import { CloudCog, Menu, UserCog } from "lucide-react";
import { usePathname } from "next/navigation";
//
import { useDispatch, useSelector } from "react-redux";
import {
  setProfileModal,
  setSideNavVisibility,
} from "../../redux/slices/NavView";
import Modal from "../ui-custom/CustomModal";
import ModalTriggerProfile from "../modal-triggers/Profile";
import ModalBodyProfile from "../modal-body/Profile";
//
export default function TopNav({ click }) {
  //
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.user.authenticated);
  const isProfileModalOpen = useSelector(
    (state) => state.navView.isProfileModalOpen
  );

  const isSideNavVisible = useSelector(
    (state) => state.navView.isSideNavVisible
  );
  //
  const pathname = usePathname();

  const dropdownRef = useRef(null);
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      dispatch(setProfileModal({ isProfileModalOpen: false }));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col px-1.0 ">
      <div className="flex justify-between items-center py-0.75 border-b border-sl-1">
        <CustomButton
          afterClick={() =>
            dispatch(
              setSideNavVisibility({ isSideNavVisible: !isSideNavVisible })
            )
          }
          startIcon={<Menu className="w-7 h-7" />}
          style=" "
        />

        <p className="flex gap-2 items-center">
          <span>
            Hi, <b>omuk !</b>
          </span>

          <CustomButton
            afterClick={() =>
              dispatch(
                setProfileModal({ isProfileModalOpen: !isProfileModalOpen })
              )
            }
            startIcon={<UserCog className="w-6 h-7 text-orange-300 my-0.125" />}
            style=" py-0.125 px-0.5 rounded-full shadow-sm bg-orange-800"
          />
          <div
            className={isProfileModalOpen ? "nav_drop_down" : `hidden`}
            ref={dropdownRef}
          >
            <span>{JSON.stringify(isProfileModalOpen)}</span>
            <ModalBodyProfile
              onClose={() => {
                alert("?");
              }}
            />
          </div>
        </p>
      </div>
      <div className="flex justify-start py-0.75">
        <span>path/path/path</span>
      </div>
    </div>
  );
}
