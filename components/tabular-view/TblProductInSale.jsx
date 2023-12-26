import React, { useState } from "react";
import { tHeadProductInSale } from "@/static-data/table-headers";
import { tDataProductInSale } from "@/static-data/table-data";
import CustomInput from "../ui-custom/CustomInput";
import { Minus, Plus } from "lucide-react";
import CustomSelect from "../ui-custom/CustomSelect";

export default function TblProductInSale() {
  const [selectedCountUnit, setCountUnit] = useState("Pieces");

  return (
    <div className="  my-1.25 bg-wh border border-slate-300 rounded-md px-1.0">
      <div className="overflow-x-auto">
        <table className="w-full border-4 border-red-500">
          <thead>
            <tr className="flex py-0.5 bg-slale-50">
              <th className="w-fit capitalize bg-slale-50 text-blue-800 py-0.5 max-w-[220px]">
                Product
              </th>
              <th className="w-fit capitalize bg-slale-50 text-blue-800 py-0.5">
                Quantity
              </th>
              <th className="w-fit capitalize bg-slale-50 text-blue-800 py-0.5">
                Unit Price
              </th>
              <th className="w-fit capitalize bg-slale-50 text-blue-800 py-0.5">
                Sub Total
              </th>
            </tr>
          </thead>

          <tbody className="w-full bg-slate-50 mb-2">
            {tDataProductInSale.map((item, ind) => {
              return (
                <tr
                  key={ind}
                  className="flex text-center text-0.9/1.25 font-normal  capitalize border"
                >
                  <td className="flex flex-col capitalize gap-2 py-0.25">
                    <span>{item.product}</span>
                    <textarea
                      rows={2}
                      placeholder="Add product IMEI, Serial number or other informations here."
                    />
                  </td>

                  <td className="flex flex-col gap-2">
                    <CustomInput
                      starButtonIcon={<Minus />}
                      endButtonIcon={<Plus />}
                      type="text"
                      value={item.quantity}
                    />
                    <CustomSelect
                      options={["Pieces"]}
                      value={selectedCountUnit}
                      onChange={(opt) => setCountUnit(opt)}
                    />
                  </td>

                  <td>
                    <CustomInput type="text" value={item.unit_price} />
                  </td>
                  <td>
                    <span>{item.sub_total}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
