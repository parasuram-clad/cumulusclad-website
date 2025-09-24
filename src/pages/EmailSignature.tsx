import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface SignatureData {
  fullName: string;
  designation: string;
  mobile: string;
  email: string;
  profilePicture: string;
}

const EmailSignature = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<SignatureData>({
    fullName: "",
    designation: "",
    mobile: "",
    email: "",
    profilePicture: "",
  });

  const [previewData, setPreviewData] = useState<SignatureData>({
    fullName: "Your Name",
    designation: "Your Designation",
    mobile: "+91-9171156941",
    email: "demo.t@example.com",
    profilePicture: "https://via.placeholder.com/80/007bff/ffffff?text=PT",
  });

  const handleInputChange = (field: keyof SignatureData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = () => {
    const newPreviewData = {
      fullName: formData.fullName || "Your Name",
      designation: formData.designation || "Your Designation",
      mobile: formData.mobile || "+91-9171156941",
      email: formData.email || "demo.t@example.com",
      profilePicture: formData.profilePicture || "https://via.placeholder.com/80/007bff/ffffff?text=PT",
    };
    setPreviewData(newPreviewData);
    toast({
      title: "Signature Generated",
      description: "Your email signature has been updated successfully!",
    });
  };

  const generateSignatureHTML = () => {
    return `<table style="box-sizing:border-box; border-collapse:collapse; border-spacing:0px" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td>
        <table style="width:100%; box-sizing:border-box; border-collapse:collapse; border-spacing:0px" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td style="width: 80px;">
                <p style="margin: 0px 0px 5px;">
                  <span style="font-family: Tahoma, 'Trebuchet MS'; font-size: 12pt; color: rgb(0, 0, 0);">
                    <img src="${previewData.profilePicture}" style="max-width: 80px; width: 80px; height: 80px; margin-top: 0px; margin-bottom: 0px; object-fit: cover;">
                  </span>
                </p>
              </td>
              <td>
                <table style="box-sizing:border-box; border-collapse:collapse; border-spacing:0px" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td>
                        <h2 style="margin: 0px 0px 4px 15px; font-size: 18px; font-weight: normal;">
                          <span style="font-family: Tahoma, 'Trebuchet MS'; color: rgb(0, 0, 0);">${previewData.fullName}</span>
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3 style="margin: 0px 0px 10px 15px; padding-bottom: 4px; border-bottom: 2px solid rgb(54, 54, 54); font-size: 13px; font-weight: normal; color: rgb(54, 54, 54);">
                          <span style="font-family: Tahoma, 'Trebuchet MS';">${previewData.designation}</span>
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="margin: 0px 0px 10px 15px; font-size: 12px;">
                          <span style="font-family: Tahoma, 'Trebuchet MS'; color: rgb(200, 38, 19);">
                            <a href="tel:${previewData.mobile}" style="color: rgb(200, 38, 19); margin-top: 0px; margin-bottom: 0px; text-decoration: none;">${previewData.mobile}</a>
                          </span>
                          <span style="font-family: Tahoma, 'Trebuchet MS'; color: rgb(0, 0, 0);"> | </span>
                          <span style="font-family: Tahoma, 'Trebuchet MS'; color: rgb(200, 38, 19);">
                            <a href="mailto:${previewData.email}" style="color: rgb(200, 38, 19); margin-top: 0px; margin-bottom: 0px; text-decoration: none;">${previewData.email}</a>
                          </span>
                          <span style="font-family: Tahoma, 'Trebuchet MS'; color: rgb(0, 0, 0);"> | </span>
                          <span style="font-family: Tahoma, 'Trebuchet MS'; color: rgb(200, 38, 19);">
                            <a href="https://www.cumulusclad.com" style="color: rgb(200, 38, 19); margin-top: 0px; margin-bottom: 0px; text-decoration: none;">www.cumulusclad.com</a>
                          </span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table style="background-color:rgb(132,60,12); width:100%; box-sizing:border-box; border-collapse:collapse; border-spacing:0px" cellspacing="0" cellpadding="10">
          <tbody>
            <tr>
              <td>
                <table style="box-sizing:border-box; border-collapse:collapse; border-spacing:0px" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td>
                        <h2 style="margin: 0px 0px 4px; font-size: 16px; font-weight: normal; color: rgb(255, 255, 255);">
                          <span style="font-family: Tahoma, 'Trebuchet MS';">CumulusClad Technologies LLP</span>
                        </h2>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="margin: 0px; font-size: 12px; color: rgb(250, 190, 150);">
                          <span style="font-family: Tahoma, 'Trebuchet MS';">No.39B, 2nd Floor, Kongunadu Trust, Chakrapani Colony,<br>St. Thomas Mount, Chennai - 600 016.</span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <div style="font-family: Tahoma, 'Trebuchet MS'; font-size: 12pt; color: rgb(0, 0, 0);"><br></div>
              </td>
            </tr>
          </tbody>
        </table>
        <table style="background-color:rgb(250,190,150); width:100%; box-sizing:border-box; border-collapse:collapse; border-spacing:0px" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td style="color: rgb(132, 60, 12);">
                <p style="margin: 5px; font-size: 10px;">
                  <span style="font-family: Tahoma, 'Trebuchet MS';">Your Digital Transformation Partner</span>
                </p>
              </td>
              <td style="color: rgb(132, 60, 12);">
                <p style="text-align: right; margin: 5px; font-size: 10px;">
                  <span style="font-family: Tahoma, 'Trebuchet MS';">Think Deep | Make Impact</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateSignatureHTML());
      toast({
        title: "Copied to Clipboard",
        description: "HTML signature code copied successfully!",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-luxury-black py-20">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
              Email Signature Generator
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Create professional email signatures for CumulusClad Technologies team members
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Left Column - Form */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Enter Details</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="text-foreground">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="designation" className="text-foreground">Designation</Label>
                  <Input
                    id="designation"
                    type="text"
                    value={formData.designation}
                    onChange={(e) => handleInputChange("designation", e.target.value)}
                    placeholder="Enter your designation"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="mobile" className="text-foreground">Mobile Number</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    placeholder="Enter your mobile number"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email ID</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email address"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="profilePicture" className="text-foreground">Profile Picture URL</Label>
                  <Input
                    id="profilePicture"
                    type="url"
                    value={formData.profilePicture}
                    onChange={(e) => handleInputChange("profilePicture", e.target.value)}
                    placeholder="Enter profile picture URL"
                    className="mt-1"
                  />
                </div>

                <Button 
                  onClick={handleGenerate}
                  className="w-full mt-6"
                  size="lg"
                >
                  Generate Signature
                </Button>
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-foreground">Preview</h2>
                <Button 
                  onClick={copyToClipboard}
                  variant="outline"
                  size="sm"
                >
                  Copy HTML Code
                </Button>
              </div>

              {/* Signature Preview */}
              <div className="bg-white p-4 rounded border overflow-hidden">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: generateSignatureHTML() 
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EmailSignature;