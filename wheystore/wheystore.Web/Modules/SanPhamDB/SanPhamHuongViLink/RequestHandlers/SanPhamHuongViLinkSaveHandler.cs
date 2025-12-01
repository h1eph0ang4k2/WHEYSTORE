using MyRow = wheystore.SanPhamDB.SanPhamHuongViLinkRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamHuongViLinkSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class SanPhamHuongViLinkSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ISanPhamHuongViLinkSaveHandler
{
}