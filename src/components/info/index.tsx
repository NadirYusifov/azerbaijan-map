
import type { RegionData } from "../../data";
import { Button } from "../ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";

interface InfoProps {
    region: RegionData | null;
}

export default function Info({ region }: InfoProps) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Region Məlumatları</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{region?.name || "Region seçin"}</DrawerTitle>
                    <DrawerDescription>Rayon haqqında ətraflı məlumat</DrawerDescription>
                </DrawerHeader>
                {region && (
                    <div className="p-4 space-y-4">
                        <div className="flex justify-between items-center py-2 border-b">
                            <span className="font-medium">Sahə:</span>
                            <span>{region.field} km²</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                            <span className="font-medium">Şəhərlərin sayı:</span>
                            <span>{region.citynum}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                            <span className="font-medium">Kənd sayı:</span>
                            <span>{region.regionnum}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                            <span className="font-medium">Mərkəz:</span>
                            <span>{region.regioncentername}</span>
                        </div>
                    </div>
                )}
                <DrawerFooter>
                    <DrawerClose>
                        <Button variant="outline">Bağla</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
