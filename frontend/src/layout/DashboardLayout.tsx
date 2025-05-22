import { AppSidebar } from "@/components/app-sidebar"
import { XBreadcrumb } from "@/components/custom/XBreadcrumb"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import React from "react";
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
    const [greeting, setGreeting] = React.useState('');
    const [currentTime, setCurrentTime] = React.useState('');
    React.useEffect(() => {
        // Function to determine greeting based on current hour
        const determineGreeting = () => {
            const currentHour = new Date().getHours();
            let newGreeting = '';

            if (currentHour >= 5 && currentHour < 12) {
                newGreeting = 'Good Morning';
            } else if (currentHour >= 12 && currentHour < 18) {
                newGreeting = 'Good Afternoon';
            } else {
                newGreeting = 'Good Evening';
            }

            setGreeting(newGreeting);

            // Format current time
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setCurrentTime(timeString);
        };

        // Set greeting initially
        determineGreeting();

        // Update greeting every minute
        const intervalId = setInterval(determineGreeting, 60000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, [greeting]);

    console.log('Greeting:', greeting);

    return (
        <SidebarProvider>
            <AppSidebar greeting={greeting} />
            <SidebarInset>
                <header className="mb-4 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10 bg-background/50 backdrop-blur-sm shadow-sm border-b border-muted/50">

                    <XBreadcrumb
                        items={[
                            { label: "Dashboard", link: "/dashboard" },
                        ]}
                    />
                    <div className="">
                        {currentTime}
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 min-h-dvh overflow-y-auto">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="aspect-video rounded-xl bg-muted/50" />
                        <div className="aspect-video rounded-xl bg-muted/50" />
                        <div className="aspect-video rounded-xl bg-muted/50" />
                    </div>
                    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 " />
                    <Outlet />


                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit ipsum neque voluptatibus architecto ut, eos laborum necessitatibus ab temporibus. Accusamus expedita veniam, voluptas blanditiis mollitia modi sint vitae ad placeat, illum temporibus aperiam quidem vero voluptatem eveniet! Vero hic laudantium, ipsam dolores vitae quam velit nesciunt ipsum labore iusto culpa magnam maxime quisquam iure optio, dolor architecto asperiores repellendus. Accusantium deleniti perferendis deserunt nisi at voluptas provident accusamus excepturi neque quasi consequuntur vel minus iusto, enim autem consectetur! Error deleniti rerum corrupti distinctio quisquam delectus voluptas voluptatem aspernatur reprehenderit sit ex sunt perferendis vel illum magnam, eveniet quaerat qui fugiat! Accusantium in eveniet dolorum porro excepturi. Ea adipisci aliquid maiores quidem reiciendis laudantium consectetur dicta, optio ratione illum eos? Obcaecati veritatis rerum error maiores officiis molestiae nisi harum. Quasi nam, ipsa facere magnam ullam sunt non consequuntur! Optio vero, quae quod dicta quisquam tenetur veniam provident voluptates ipsam! Quis, voluptatum minima numquam vero aut tempora ullam beatae minus natus nostrum perferendis laudantium, veritatis possimus, dolore velit harum esse deleniti. Eius quo laborum labore maiores, repellat accusamus ab beatae tenetur enim fugiat officia earum quae alias delectus sequi ullam recusandae animi necessitatibus sunt temporibus reiciendis fugit modi deleniti? Tempora id temporibus iure ex. Molestiae, unde enim. Cupiditate repellendus aliquid dolorem esse laudantium, praesentium magni fugiat excepturi soluta vel cumque itaque maiores modi ut dolorum rem quo quibusdam. Qui magni voluptatem consectetur voluptate. Debitis architecto hic, mollitia aspernatur accusamus sequi atque sit iste alias ipsam. Porro rem commodi hic voluptas et similique sed rerum deleniti a eligendi nisi dicta ut veritatis, officia maiores? Facilis, asperiores? Voluptate facilis illum eveniet eos, tenetur laudantium quam itaque harum quibusdam, doloremque accusamus ea tempore. Rem, unde animi eius itaque eveniet nostrum non deleniti quod sapiente. Quae maiores iusto alias fugiat, reiciendis inventore aperiam sequi odio?
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
