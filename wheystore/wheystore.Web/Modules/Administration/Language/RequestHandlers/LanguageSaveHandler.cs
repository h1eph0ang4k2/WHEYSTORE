using MyRow = wheystore.Administration.LanguageRow;

namespace wheystore.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow> { }

public class LanguageSaveHandler(IRequestContext context)
    : SaveRequestHandler<MyRow>(context), ILanguageSaveHandler
{
}