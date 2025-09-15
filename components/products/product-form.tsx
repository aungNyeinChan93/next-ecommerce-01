import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";

export function ProductForm() {
  return (
    <Card className="w-full sm:w-[500px]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Product Form</CardTitle>
          <CardAction>
            <Button variant="link">back</Button>
          </CardAction>
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>
              <Input id="name" type="text" placeholder="product name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Description</Label>
              <Textarea id="name" className="h-25" placeholder="product desc" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Price</Label>
              <Input id="price" type="number" placeholder="price" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Image</Label>
              <Input id="image" type="file" multiple placeholder="image" />
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="stock" checked />
              <Label htmlFor="stock" className="text-sky-600">
                Stock is Avaliable
              </Label>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}
